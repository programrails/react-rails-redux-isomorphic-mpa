class ApplicationController < ActionController::Base
  before_action :set_data
  per_request_react_rails_prerenderer

  def set_data
    @current_url = request.fullpath
  end
end
