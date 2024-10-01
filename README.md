# Kanban-Board

### Tech Stack Used:
A pure front-end project made using ReactJS and CSS.

### About and Functionality:

Interacts with the given backend, and displays data accordingly.
When a user clicks the "display" button and selects a grouping option, the Kanban board dynamically adjust to reflect the user's choice.

This application offer three distinct ways to group the data:

1. **By Status**: Group tickets based on their current status.
2. **By User**: Arrange tickets according to the assigned user.
3. **By Priority**: Group tickets based on their priority level.

Users are able to sort the displayed tickets in two ways:

1. **Priority**: Arrange tickets in descending order of priority.
2. **Title**: Sort tickets in ascending order based on their title.

The Kanban board is responsive and visually appealing, with a design similar to that provided. 

**The priority levels for the tickets are as follows:**

- Urgent (Priority level 4)
- High (Priority level 3)
- Medium (Priority level 2)
- Low (Priority level 1)
- No priority (Priority level 0)

Additionally, the application save the user's view state even after page reload using localStorage.