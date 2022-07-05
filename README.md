# GIVEN I am using a daily planner to create a schedule

WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

# DESCRIPTION
This site allows a user to click a text area and type what their goals are for that hour. The site will adjust the background of each hour as the day progresses. Gray represents hours in the past, red for the current hour, and green for upcoming hours.

The user can click the save button to the right of each row to save the content within the corresponding text area. This allows the user to save the input without having to keep the website open. If the user erases content within a text box and wishes to save, they must again click the save button to confirm any changes made.


# LESSONS LEARNED
This was truly an exercise is learning to navigate through the DOM and learn the use of jQuery. 

# IMPROVEMENTS 
A delete button to the right of the save button would be a nice addition for future work. This would allow the user to delete all or line by line without having to delete the content manually, then press the save button.

Allowing to fill in an expected time-to-complete for each task. As opposed to just starting them at a certain time, you could also write how long you expect them to take.

# CONTRIBUTIONS
Xandromus, provided some starter code: https://github.com/xandromus
Meg Meyers, provided some integral logic in the javascript: https://github.com/femke77
Andrew Cooke, filled in the gaps: https://github.com/andcooke