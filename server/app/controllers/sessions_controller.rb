class SessionsController < Devise::SessionsController
    respond_to :json
    
    def create
        user = User.find_for_database_authentication(email: params[:emails])

        if user && user.valid_password?(params[:password])
            sign_in(user)
            render json: user, status: :ok
        else
            render json: { error: 'Correo electrónico o contraseña incorrectos' }, status: :unauthorized
        end
    end
end


# debo configurar una db remota para poder hacer la solicitud desde cualquier pce

# investigar sobre aws y azure