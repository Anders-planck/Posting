module Api 
  module V1 
    class PostsController < ApplicationController
      before_action :authorize_request
      before_action :set_post, only: [:show, :update, :destroy]

      # GET /posts
      def index
        @posts = Post.all
        
        render json: @posts.to_json(
          :include=> {
            :user =>{only: [:name,:username]},
            :comments =>{
              only: [:body,:created_at],
              include: [:user => {only: [:name,:username,:id]}]
            },
            :images => {only: [:name,:size],methods: [:image_url]},
            :tags => {only: [:body]},
          })
      end

      # GET /posts/1
      def show
        render json: @post
      end

      # POST /posts
      def create
        @post = current_user.posts.create post_params
        # Attach picture to our item, if available
        #attach_main_pic(@post) if admin_params[:image].present?
      #  byebug
        #attach_main_tags(@post) if admin_params[:tags].present?
        if @post.persisted?
          render json: @post.to_json(
            :include=> {
              :user =>{only: [:name,:username]},
              :comments =>{
                only: [:body,:created_at],
                include: [:user => {only: [:name,:username]}]
              },
              :tags => {only: [:body]},
              :images => {only: [:name,:size]}
            }), status: :created
        else
          render json: @post.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /posts/1
      def update
        if @post.update(post_params)
          render json: @post
        else
          render json: @post.errors, status: :unprocessable_entity
        end
      end

      # DELETE /posts/1
      def destroy
        @post.destroy
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_post
          @post = Post.find(params[:id])
        end


        def attach_main_pic(item)
          item.image.attach(admin_params[:image])
        end


        # def attach_main_tags(item)
        #   admin_params[:tags].each do |tag|
        #     item.tags.create(tag)  
        #   end
          
        # end
      
        def post_params
          {
            description: admin_params[:description],
            title: admin_params[:title],
            status: admin_params[:status]
          }
        end

        # Only allow a list of trusted parameters through.
        def admin_params
          params.permit(:title, :description, :status)
        end
    end

  end
end

