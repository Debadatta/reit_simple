module DeepUnderscore
  def deep_underscore!(val)
    case val
    when Array
      val.map {|v| deep_underscore! v }
    when Hash
      val.keys.each do |k, v = val[k]|
        val.delete k
        val[k.underscore] = deep_underscore!(v)
      end
      val
    else
      val
    end
  end
end
