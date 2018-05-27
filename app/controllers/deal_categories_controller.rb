class DealCategoriesController < ApplicationController
  skip_before_filter :authenticate_request

  def index
    render_success(:ok, DealCategory.all, each_serializer: DealDategorySerializer)
  end

  def create
    category = DealCategory.find_or_create_by(deal_create_params)

    if category.save
      render_success(:ok, category, serializer: DealDategorySerializer)
    else
      render_error(:unprocessable_entity, [title: category.errors.full_messages.to_sentence])
    end
  end

  private

  def deal_create_params
    params.require(:deal_category).permit(:name)
  end
end
