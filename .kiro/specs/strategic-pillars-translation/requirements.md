# Requirements Document

## Introduction

The "6 Strategic Pillars" section on the About page is currently hardcoded in English and not properly integrated with the existing i18n translation system. This prevents the content from being displayed in French and Dutch, creating an inconsistent user experience for non-English speaking visitors.

## Glossary

- **Strategic_Pillars_Section**: The section on the About page that displays 6 service categories with titles and descriptions
- **Translation_System**: The existing i18next-based internationalization system using JSON translation files
- **Component**: The React component that renders the Strategic Pillars section
- **Translation_Keys**: The structured keys used to access translated content from JSON files

## Requirements

### Requirement 1: Integrate Strategic Pillars with Translation System

**User Story:** As a French or Dutch speaking visitor, I want to see the Strategic Pillars section in my preferred language, so that I can understand the services offered by the agency.

#### Acceptance Criteria

1. WHEN a user views the About page in French, THE Strategic_Pillars_Section SHALL display all titles and descriptions in French
2. WHEN a user views the About page in Dutch, THE Strategic_Pillars_Section SHALL display all titles and descriptions in Dutch  
3. WHEN a user views the About page in English, THE Strategic_Pillars_Section SHALL display all titles and descriptions in English
4. WHEN the language is switched on the About page, THE Strategic_Pillars_Section SHALL immediately update to show content in the selected language
5. THE Component SHALL use the existing Translation_System instead of hardcoded strings

### Requirement 2: Complete Translation Content

**User Story:** As a content manager, I want all Strategic Pillars content to be available in all supported languages, so that the website provides a consistent multilingual experience.

#### Acceptance Criteria

1. THE Translation_Keys SHALL exist for all Strategic Pillars titles in English, French, and Dutch translation files
2. THE Translation_Keys SHALL exist for all Strategic Pillars descriptions in English, French, and Dutch translation files
3. WHEN translation content is missing for any language, THE Translation_System SHALL fallback to English content
4. THE Translation_Keys SHALL follow the existing naming convention used in other parts of the application
5. THE Translation_Keys SHALL be organized under a consistent namespace in the JSON structure

### Requirement 3: Maintain Visual Consistency

**User Story:** As a user, I want the Strategic Pillars section to maintain its current visual design and functionality, so that the translation integration doesn't affect the user interface.

#### Acceptance Criteria

1. WHEN translations are applied, THE Strategic_Pillars_Section SHALL maintain its current grid layout and styling
2. WHEN translations are applied, THE Strategic_Pillars_Section SHALL maintain its current icons and color scheme
3. WHEN translations are applied, THE Strategic_Pillars_Section SHALL maintain its current hover effects and animations
4. THE Component SHALL preserve all existing CSS classes and styling properties
5. THE Component SHALL handle varying text lengths across different languages without breaking the layout