module Api
  module V1
    class ImagesController < ApplicationController
      before_action :set_image, only: [:show, :update, :destroy]
    
      # GET /images
      def index
        @images = Image.all
    
        render json: @images
      end
    
      # GET /images/1
      def show
        render json: @image
      end
    
      # POST /images
      def create
        @image = current_user.images.new(image_params)
    
        if @image.save
          render json: @image, status: :created
        else
          render json: @image.errors, status: :unprocessable_entity
        end
      end
    
      # PATCH/PUT /images/1
      def update
        if @image.update(image_params)
          render json: @image
        else
          render json: @image.errors, status: :unprocessable_entity
        end
      end
    
      # DELETE /images/1
      def destroy
        @image.destroy
      end
    
      private
        # Use callbacks to share common setup or constraints between actions.
        def set_image
          @image = current_user.images.find(params[:id])
        end
    
        # Only allow a list of trusted parameters through.
        def image_params
          params.permit(:name, :size,:image)
          .merge(post_id: params[:post_id])
        end
    end
  end
end

