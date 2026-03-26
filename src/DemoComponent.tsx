import { Badge } from "@openai/apps-sdk-ui/components/Badge";
import { Button } from "@openai/apps-sdk-ui/components/Button";
import { Tooltip } from "@openai/apps-sdk-ui/components/Tooltip";
/**
 * Swap this component with whatever you are currently testing.
 * The App renders whatever DemoComponent exports.
 */
export function DemoComponent() {
  return (
      <Tooltip content="Label" compact={true}>
        <Tooltip.TriggerDecorator>
          Simple text with tooltip
        </Tooltip.TriggerDecorator>
      </Tooltip>
  );
}
