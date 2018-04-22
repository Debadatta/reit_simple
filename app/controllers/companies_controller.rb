class CompaniesController < ApplicationController
  def show
    render_success(:ok, current_user.company, include: [:company_phone_number, :company_address, business_contact: [:contact_phone_number, :contact_email_address], operations_contact: [:contact_phone_number, :contact_email_address], financial_contact: [:contact_phone_number, :contact_email_address]])
  end

  def update
    if current_user.company
      current_user.company.update_attributes(company_params)
    else
      current_user.create_company(company_params)
    end

    if current_user.company.errors.blank?
      render_success(:ok, current_user.company, include: [:business_contact, :operations_contact, :financial_contact, :company_phone_number, :company_address])
    else
      render_error(:unprocessable_entity, [ title: current_user.company.errors.full_messages.to_sentence ])
    end
  end

  private

  def company_params
    params.require(:company).permit(:name, company_address_attributes: [:id, :street1, :street2, :state, :city, :postal_code], company_phone_number_attributes: [:id, :digits], business_contact_attributes: [:id, :first_name, :last_name, :title, contact_phone_number_attributes: [:id, :digits], contact_email_address_attributes: [:id, :address]], operations_contact_attributes: [:id, :first_name, :last_name, :title, contact_phone_number_attributes: [:id, :digits], contact_email_address_attributes: [:id, :address]], financial_contact_attributes: [:id, :first_name, :last_name, :title, contact_phone_number_attributes: [:id, :digits], contact_email_address_attributes: [:id, :address]])
  end
end
