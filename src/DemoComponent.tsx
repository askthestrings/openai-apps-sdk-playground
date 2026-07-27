import { Badge } from "@openai/apps-sdk-ui/components/Badge";
import { Button } from "@openai/apps-sdk-ui/components/Button";
import { Tooltip } from "@openai/apps-sdk-ui/components/Tooltip";
import { Alert } from "@openai/apps-sdk-ui/components/Alert";
/**
 * Swap this component with whatever you are currently testing.
 * The App renders whatever DemoComponent exports.
 */
export function DemoComponent() {
  return (
    <div style={{ width: "356px" }}>
      <Alert
        title="Our terms of service has been updated"
        description="We've updated our terms to clarify how we handle data, billing, and user permissions. Please review and accept the latest terms to avoid impacting your service."
        actions={(
          <div style={{ display: "flex", flexDirection: "row", gap: "8px", width: "100%" }}>
            <Button style={{flex: "1"}} size="lg" color="primary" pill variant="soft">Set reminder</Button>
            <Button style={{flex: "1"}} size="lg" color="primary" pill variant="solid">Review terms</Button>
          </div>
        )}
        actionsPlacement="bottom"
      />
    </div>
  );
}
