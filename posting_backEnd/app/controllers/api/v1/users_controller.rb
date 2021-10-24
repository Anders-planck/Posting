module Api
    module V1
        class UsersController < ApplicationController
            before_action :authorize_request, except: %i[create show]
            before_action :find_user, except: %i[create index]

            def index
                @users = User.all

                render json: @users.to_json(
                    :include=> {
                      :avatar => {only: [:name,:size],methods: [:avatar_url]},
                    }), status: :ok
            end

            def show
                
                render json: @user.to_json(
                    :include=> {
                      :avatar => {only: [:name,:size],methods: [:avatar_url]},
                }), status: :ok        
            end

            def create
                #read in user params
                #create a new user with them
                @user = User.new(user_params)
                if @user.save
                    render json: @user, status: :created
                else
                    render json: {error: @user.errors.full_messages}, status: :unprocessable_entity
                end        
            end

            def destroy
                @user.destroy
                render json: {messages: "success delete"}   
            end

            def update
                unless @user.update(user_params)
                    render json: {error: @user.errors.full_messages}, status: :unprocessable_entity
                end
            end
            
            private

            def user_params
                params.permit(:avatar, :name, :username, :email ,:numero,:password ,:password_confirmation)
            end


            def find_user
                @user= User.find_by!("id": params[:id])
                rescue ActiveRecord::RecordNotFound
                render json: {errors: "User not Found"}, status: :not_found
            end
        end
    end
end
