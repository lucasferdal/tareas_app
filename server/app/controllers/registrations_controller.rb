class RegistrationsController < Devise::RegistrationsController
    def create
        build_resource(sign_up_params)

        resource.save
        if resource.persisted?
            render json: resource, status: :created
        else
            render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    
    def sign_up_params
        params.require(:user).permit(:email, :password, :password_confirmation)
    end

    def json_request?
        request.format.json?
    end
end
