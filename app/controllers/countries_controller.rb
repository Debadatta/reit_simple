class CountriesController < ApplicationController
  skip_before_action :authenticate_request

  def index
    render_success(:ok, Country.all)
  end
end
