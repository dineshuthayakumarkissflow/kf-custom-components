import { FORM_FIELD_COMPONENTS, PLATFORMS } from "@kissflow/form-field-config";

export default {
  [PLATFORMS.WEB]: {
    [FORM_FIELD_COMPONENTS.FORM_FIELD]: "./src/web/FormField.jsx",
    [FORM_FIELD_COMPONENTS.SHEET]: "./src/web/EditableTable.jsx",
    // [FORM_FIELD_COMPONENTS.DATA_TABLE]: './src/web/ReadonlyTable.jsx',
    [FORM_FIELD_COMPONENTS.CARD]: "./src/web/Card.jsx",
  },
  [PLATFORMS.PWA]: {
    [FORM_FIELD_COMPONENTS.FORM_FIELD]: "./src/pwa/FormField.jsx",
    [FORM_FIELD_COMPONENTS.CARD]: "./src/pwa/Card.jsx",
    [FORM_FIELD_COMPONENTS.DATA_TABLE]: "./src/pwa/ReadonlyTable.jsx",
  },
};
