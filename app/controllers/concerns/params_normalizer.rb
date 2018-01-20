module ParamsNormalizer
  extend ActiveSupport::Concern
  include DeepUnderscore

  def process_action(*args)
    deep_underscore!(request.parameters)
    super
  end
end
