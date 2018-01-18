require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ReitSimple
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.autoload_paths += %W(#{config.root}/app/forms)
    config.autoload_paths << Rails.root.join('lib')

    ActiveSupport::JSON::Encoding.time_precision = nil

    config.active_record.raise_in_transactional_callbacks = true

    config.i18n.enforce_available_locales = false

    # Configure the default encoding used in templates for Ruby 1.9.
    config.encoding = "utf-8"

    # logging and errors
    config.exceptions_app = self.routes
  end
end
