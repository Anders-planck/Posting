class ApplicationController < ActionController::API
    def not_found
        render json: {error: "not found"}
    end

    def current_user
        header= request.headers['Authorization']
        header= header.split(' ').last if header
        @decoded = JsonWebToken.decode(header)
        @current_user = User.find(@decoded[:user_id])
        if @current_user
            return @current_user 
        else return nil
        end
    end
    

    def authorize_request
        header= request.headers['Authorization']
        header= header.split(' ').last if header
        begin
            @decoded = JsonWebToken.decode(header)
            @current_user = User.find(@decoded[:user_id])
        rescue ActiveRecord::RecordNotFound =>e 
            render json: { error: e.message}, status: :unauthorized
        rescue JWT::DecodeError => e
        render json: { error: e.message}, status: :unauthorized
        end
    end
end
