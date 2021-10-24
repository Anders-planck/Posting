module Api 
  module V1 
    class CommentsController < ApplicationController
      before_action :authorize_request
      before_action :set_comment, only: [:show, :update, :destroy]
    
      # GET /comments
      def index
        @comments = current_user.comments.all

        render json: @comments
      end

      # GET /comments/1
      def show
        render json: @comment
      end

      # POST /comments
      def create
        @comment=current_user.comments.new(comment_params)
        if @comment.save
          render json: @comment.to_json(
            :include=> {
            :user =>{only: [:id,:name,:username]},
            }), status: :created
        else
          render json: @comment.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /comments/1
      def update
        if @comment.update(comment_params)
          render json: @comment
        else
          render json: @comment.errors, status: :unprocessable_entity
        end
      end

      # DELETE /comments/1
      def destroy
        @comment.destroy
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_comment
          @comment = current_user.comments.find(params[:id])
        end

        # Only allow a list of trusted parameters through.
        def comment_params
          params.permit(:body, :post_id)
          .merge(post_id: params[:post_id])
        end
    end
  end
end

