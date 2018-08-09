module React
  module ServerRendering
    class AppstateRenderer < BundleRenderer

      def render(component_name, props, prerender_options)
        html = super(component_name, props, prerender_options)        

        redux_store_state = ActiveSupport::SafeBuffer.new "<script>.black-color {color: black;}</script>"

        html = redux_store_state + html
      end

    end
  end
end
