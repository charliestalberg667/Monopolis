# Design Document: Strategic Pillars Translation Integration

## Overview

This design addresses the integration of the hardcoded "6 Strategic Pillars" section on the About page with the existing i18next translation system. The solution will replace hardcoded English strings with dynamic translation keys while maintaining the current visual design and functionality.

## Architecture

The solution follows the established pattern used in the services page, leveraging the existing i18next infrastructure:

```
Translation Files (JSON) → i18next Config → React Component → Rendered UI
```

### Key Components

1. **Translation Files**: Extended JSON files with new strategic pillars content
2. **About Page Component**: Modified to use translation keys instead of hardcoded strings  
3. **i18next System**: Existing translation infrastructure (no changes needed)

## Components and Interfaces

### Translation Data Structure

The strategic pillars data will be organized under the `about.pillars` namespace in each language file:

```typescript
interface StrategicPillar {
  title: string;
  description: string;
}

interface AboutTranslations {
  pillars: {
    segmentation: StrategicPillar;
    sales: StrategicPillar;
    rentals: StrategicPillar;
    relocation: StrategicPillar;
    assetManagement: StrategicPillar;
    newDevelopments: StrategicPillar;
  };
}
```

### Component Interface

The About page component will be modified to:

```typescript
// Current hardcoded approach
const strategicServices = [
  { 
    key: 'segmentation', 
    title: "House Segmentation",  // Hardcoded
    desc: "Maximizing property value..."  // Hardcoded
  }
];

// New translation-based approach  
const strategicServices = [
  {
    key: 'segmentation',
    title: t('about.pillars.segmentation.title'),
    desc: t('about.pillars.segmentation.description')
  }
];
```

## Data Models

### Translation File Structure

Each language file will contain the strategic pillars data under a consistent structure:

```json
{
  "about": {
    "pillars": {
      "segmentation": {
        "title": "House Segmentation",
        "description": "Maximizing property value by dividing large estates into compliant, high-yield residential units."
      },
      "sales": {
        "title": "Premium Sales", 
        "description": "Tailored marketing and expert negotiation to sell your property at the best market price."
      },
      "rentals": {
        "title": "Rental Management",
        "description": "Full-service tenant sourcing and administrative management for a worry-free investment."
      },
      "relocation": {
        "title": "Relocation & Admin",
        "description": "Comprehensive support for moving to Belgium, including neighborhood search and registration."
      },
      "assetManagement": {
        "title": "Asset Management", 
        "description": "Strategic oversight of your real estate portfolio to maximize long-term ROI and tax efficiency."
      },
      "newDevelopments": {
        "title": "New Projects",
        "description": "Expert guidance for off-plan purchases and managing large-scale new construction developments."
      }
    }
  }
}
```

### Icon and Styling Mapping

The component will maintain a mapping between pillar keys and their visual properties:

```typescript
const pillarConfig = {
  segmentation: { icon: <FiScissors />, colorScheme: 'pink' },
  sales: { icon: <FiDollarSign />, colorScheme: 'pink' },
  rentals: { icon: <FiKey />, colorScheme: 'pink' },
  relocation: { icon: <FiMapPin />, colorScheme: 'pink' },
  assetManagement: { icon: <FiTrendingUp />, colorScheme: 'green' },
  newDevelopments: { icon: <FiLayers />, colorScheme: 'green' }
};
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Language-Specific Content Display
*For any* supported language (English, French, Dutch), when the About page is viewed in that language, all strategic pillar titles and descriptions should display in the correct language
**Validates: Requirements 1.1, 1.2, 1.3**

### Property 2: Translation Key Completeness
*For any* strategic pillar and any supported language, both title and description translation keys should exist and return non-empty strings
**Validates: Requirements 2.1, 2.2**

### Property 3: Language Switching Reactivity  
*For any* language switch operation on the About page, the strategic pillars section should immediately reflect the new language content
**Validates: Requirements 1.4**

### Property 4: Fallback Behavior
*For any* missing translation key, the system should fallback to English content without breaking the component
**Validates: Requirements 2.3**

### Property 5: Visual Consistency Preservation
*For any* language with different text lengths, the strategic pillars section should maintain its current grid layout, styling, icons, color scheme, and interactive behaviors
**Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5**

## Error Handling

### Missing Translation Keys
- **Scenario**: Translation key doesn't exist in a language file
- **Handling**: i18next automatically falls back to English (fallbackLng: 'en')
- **User Experience**: Content displays in English instead of breaking

### Malformed Translation Data
- **Scenario**: Translation file has invalid JSON structure
- **Handling**: i18next initialization will fail gracefully
- **User Experience**: Application falls back to English translations

### Runtime Translation Errors
- **Scenario**: Translation function throws an error
- **Handling**: Component catches errors and displays fallback content
- **User Experience**: Strategic pillars display with default English content

## Testing Strategy

### Unit Testing
- Test translation key resolution for each language
- Test component rendering with different language contexts
- Test fallback behavior when translations are missing
- Test icon and styling preservation across languages

### Property-Based Testing
- **Property 1**: Generate different language contexts and verify all strategic pillar content displays in the correct language
- **Property 2**: Generate random strategic pillar keys and language combinations to verify translation key existence
- **Property 3**: Generate language switch events and verify immediate UI updates  
- **Property 4**: Generate scenarios with missing keys and verify fallback behavior
- **Property 5**: Generate text content of varying lengths and verify layout and visual consistency

### Integration Testing
- Test complete language switching workflow on About page
- Test translation loading during component initialization
- Test browser language detection and automatic translation selection

Both unit tests and property-based tests are essential for comprehensive coverage. Unit tests validate specific examples and edge cases, while property tests verify universal behaviors across all possible inputs and language combinations.