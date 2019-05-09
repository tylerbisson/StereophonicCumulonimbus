class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      # render json: @user.errors.full_messages, status: 422
      render json: ["Must submit profile image, username, and password with 6 or more characters"], status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render "api/users/show"
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :portrait)
  end
end