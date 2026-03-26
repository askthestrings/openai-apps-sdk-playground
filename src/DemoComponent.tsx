import { Badge } from "@openai/apps-sdk-ui/components/Badge";
import { Button } from "@openai/apps-sdk-ui/components/Button";
import { Tooltip } from "@openai/apps-sdk-ui/components/Tooltip";
/**
 * Swap this component with whatever you are currently testing.
 * The App renders whatever DemoComponent exports.
 */
export function DemoComponent() {
  return (
      <Tooltip content="This is additional context that appears when the trigger is hovered or focused" compact={true}>
        <Tooltip.TriggerDecorator>
          Label
        </Tooltip.TriggerDecorator>
      </Tooltip>
  );
}
