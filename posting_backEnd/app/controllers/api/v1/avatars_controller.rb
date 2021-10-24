module Api
  module V1
    class AvatarsController < ApplicationController
      before_action :set_avatar, only: [:show, :update, :destroy]
    
      # GET /images
      def index
        @images = Image.all
    
        render json: @avatars
      end
    
      # GET /avatars/1
      def show
        render json: @avatar
      end
    
      # POST /avatars
      def create
        @avatar = current_user.avatars.new(avatar_params)
    
        if @avatar.save
          render json: @avatar, status: :created
        else
          render json: @avatar.errors, status: :unprocessable_entity
        end
      end
    
      # PATCH/PUT /avatars/1
      def update
        if @avatar.update(avatar_params)
          render json: @avatar
        else
          render json: @avatar.errors, status: :unprocessable_entity
        end
      end
    
      # DELETE /avatars/1
      def destroy
        @avatar.destroy
      end
    
      private
        # Use callbacks to share common setup or constraints between actions.
        def set_avatar
          @avatar = current_user.avatars.find(params[:id])
        end
    
        # Only allow a list of trusted parameters through.
        def avatar_params
          params.permit(:name, :size,:avatar)
        end
    end
  end
end

