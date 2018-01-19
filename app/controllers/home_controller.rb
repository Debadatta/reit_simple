class HomeController < ApplicationController
	skip_before_filter :authenticate_request
  def index
  end

  def login
  end

  def signup
  end
end
