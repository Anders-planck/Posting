module Api 
  module V1 
    class TagsController < ApplicationController
      before_action :set_tag, only: [:show, :update, :destroy]

      # GET /tags
      def index
        @tags = current_user.tags.all

        render json: @tags
      end

      # GET /tags/1
      def show
        render json: @tag
      end

      # POST /tags
      def create
        @tag = current_user.tags.new(tag_params)

        if @tag.save
          render json: @tag, status: :created
        else
          render json: @tag.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /tags/1
      def update
        if @tag.update(tag_params)
          render json: @tag
        else
          render json: @tag.errors, status: :unprocessable_entity
        end
      end

      # DELETE /tags/1
      def destroy
        @tag.destroy
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_tag
          @tag = current_user.tags.find(params[:id])
        end

        # Only allow a list of trusted parameters through.
        def tag_params
          params.permit(:body, :post_id)
          .merge(post_id: params[:post_id])
        end
    end
  end
end


