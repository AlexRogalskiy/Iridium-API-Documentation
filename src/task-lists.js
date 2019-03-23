/**
 * The main context for all task lists in the app.
 *
 * @class
 * @name IridiumApp.TaskLists
 */
/**
 * Gets all task lists and their information. This includes any task lists shared with the user. This does not retrieve tasks in the list.
 *
 * @function
 * @name IridiumApp.TaskLists#GetTaskLists
 * @returns {Promise}
 * <br>
 * Resolves to {@link #ITaskListInfo|`ITaskListInfo[]`}.
 *
 * @example
 * TaskListsContext.GetTaskLists().then(taskLists => {
 *     // Prints how many task lists total in Iridium.
 *     console.log(taskLists.length);
 * });
 */
/**
 * Gets a specific task list's information and tasks.
 *
 * @function
 * @name IridiumApp.TaskLists#GetTaskList
 * @param {string} id The id of the task list
* @throws {Error} If id is not specified
 * @returns {Promise}
 * <br>
 * Resolves to {@link #ITaskList|`ITaskList[]`}.
 * <br>
 * Rejets if: Task list does not exist.
 * @example
 * TaskListsContext.GetTaskList('81a7428b-3026-4023-a870-d32be105dd88').then(taskList => {
 *     // Prints how many tasks in the list.
 *     console.log(taskList.tasks.length);
 * });
 */
/**
 * Subscribes for a specific task event. The handler will be invoked when the associated event occurs in Iridium.
 * @function
 * @name IridiumApp.TaskLists#on
 * @param {TaskEvents} event The event to subscribe to. See {@link IridiumApp.TaskEvents} enum type for specific event name and associated arguments.
 * @param {Function} handler The associated event handler that will be invoked, the event argument will be passed in as 1st parameter.
 * @param {string} [registration] An optional registration token associated with this handler that can be used later to unsubscribe. 
 * This token need not be unique per handler.
 * @throws {Error} If the event is not a recognized TaskEvent
 * @example
 * // When a task is created, print the title to debug console
 * TaskListsContext.on(TaskEvents.TaskCreated, (arg) => {
 *     console.log(arg.title);
 * });
 * 
 */

/**
* Unsubscribes a previously subscribed handler with the given registration token. If the same token is used to register multiple handlers, they will all be unsubscribed. 
* If no token is given, all handlers of that event will be unsubscribed.
* 
* @function
* @name IridiumApp.TaskLists#off
* @param {TaskEvents} event The event to unsubscribe.
* @param {string} [registration] The registration token associated with handlers previously subscribed. 
* @throws {Error} If the event is not a recognized TaskEvent
* @example
* // Log only the first created task's title after registering handler
* TaskListsContext.on(TaskEvents.TaskCreated, (arg) => {
*     console.log(arg.title);
*     TaskListsContext.off(TaskEvents.TaskCreated, 'token');
* }, 'token');
* 
*/


/**
* A snapshot of a task list's general information.
*
* @typedef ITaskListInfo
* @type Object
*
* @property {string} id The id of the task list which is UUID v4 formated.
* @property {string} title The title of the task list.
* @property {boolean} completed Boolean indicating whether the task list is completed.
* @property {number} completedPercentage The percentage of the completed tasks in this list. The number is rounded to whole number.
* @property {number} inProgressPercentage The percentage of the in-progress tasks in this list. The number is rounded to whole number.
* @property {boolean} archived Indicating if the list is archived.
*/

/**
* A snapshot of a task list.
*
* @typedef ITaskList
* @type Object
*
* @property {string} id The id of the task list which is UUID v4 formated.
* @property {string} title The title of the task list.
* @property {boolean} completed Boolean indicating whether the task list is completed.
* @property {number} completedPercentage The percentage of the completed tasks in this list. The number is rounded to whole number.
* @property {number} inProgressPercentage The percentage of the in-progress tasks in this list. The number is rounded to whole number.
* @property {number} order A ordering sequence number applied to the task list.
* @property {ITask[]} tasks All tasks present in the list.
*/


/**
* A snapshot of a task.
*
* @typedef ITask
* @type Object
*
* @property {string} id The id of the task which is UUID v4 formated.
* @property {string} title The title of the task.
* @property {boolean} completed Boolean indicating whether the task is completed.
* @property {number} inProgress Boolean indicating whether ths task is in progress.
* @property {number} order A ordering sequence number applied to the task.
* @property {string[]} labels Labels applied on the task. When no labels are present, the array is empty.
* @property {string} dueDate Due date of the task if any. When set, the string is ISO formatted date string YYYY-MM-DD. When no due date is set, the string is empty.
*/

/**
* event arguments for some task events.
* @typedef TaskEventArg
* @type Object
*
* @property {string} listId The id of list where the task belongs to which is UUID v4 formated.
* @property {string} id The id of the task which is UUID v4 formated.
* @property {string} title The title of the task.
* @property {boolean} completed Boolean indicating whether the task is completed.
* @property {number} inProgress Boolean indicating whether ths task is in progress.
* @property {number} order A ordering sequence number applied to the task.
* @property {string[]} labels Labels applied on the task. When no labels are present, the array is empty.
* @property {string} dueDate Due date of the task if any. When set, the string is ISO formatted date string YYYY-MM-DD. When no due date is set, the string is empty.
*/

/**
* event arguments for task deleted events.
* @typedef TaskDeletedEventArg
* @type Object
*
* @property {string} listId The id of list where the task belongs to which is UUID v4 formated.
* @property {string} id The id of the task which is UUID v4 formated.
*/


/**
* event arguments for task moved event.
* @typedef TaskMovedEventArg
* @type Object
*
* @property {string} fromListId The id of list where the task is moved <b>from</b>, which is UUID v4 formated.
* @property {string} toListId The id of list where the task is moved <b>to</b>, which is UUID v4 formated.
* @property {string} id The id of the task which is UUID v4 formated.
*/
/**
* event arguments for task list updated events.
* @typedef TaskListEventArg
* @type Object
*
* @property {string} listId The id of list.
* @property {string} listTitle The title of list.
* @property {boolean} compldete True if task list is completed, false otherwise.
* @property {boolean} archived True if task list is archived, false otherwise.
* @property {number} completedPercentage The percentage of the completed tasks in this list. The number is rounded to whole number.
* @property {number} inProgressPercentage The percentage of the in-progress tasks in this list. The number is rounded to whole number.
*/
/**
* event arguments for task list progress updated event.
* @typedef TaskListProgressUpdatedEventArg
* @type Object
*
* @property {string} listId The id of list.
* @property {number} completedPercentage The percentage of the completed tasks in this list. The number is rounded to whole number.
* @property {number} inProgressPercentage The percentage of the in-progress tasks in this list. The number is rounded to whole number.
*/


/**
 * A list of events used in {@link TaskListsContext#on}, {@link TaskListsContext#off} to subscribe/unsubscribe and their associated arguments that will be passed in to handlers when event occurs.
 * @readonly
 * @enum {string}
 */
IridiumApp.TaskEvents = {
    /**
     * TaskCreated is emitted when a task is created and added to a list. This happens when:
     * 
     *     1. User creates new task.
     * 
     *     2. User un-deletes a deleted task.
     * 
     *     3. User moves task into a list.
     * 
     * <br>
     * Argument: {@link TaskEventArg}
     * <blockquote>TaskCreated will not be emitted when a new task is downloaded from Iridium Cloud, see {@link IridiumApp.TaskEvents | TaskEvents.TaskDownloaded} </blockquote>
     */
    TaskCreated: "TaskCreated",
    /**
     * TaskListCreated is emitted when user creates a task list, this can happen when:
     * 
     *     1. User creates new by using the + button next to Task Lists.
     * 
     *     2. User un-deletes a deleted task list.
     * 
     *     3. User promotes a task to a list.
     * 
     *     4. User creates a task that goes into a new list using the "Add Task" dialog.
     * 
     * <br>
     * Argument: {@link TaskListEventArg}
     * <blockquote>TaskListCreated will not be emitted when a new task list is downloaded from Iridium Cloud, see {@link IridiumApp.TaskEvents | TaskEvents.TaskListDownloaded} </blockquote>
     */
    TaskCreated: "TaskCreated",
    /**
     * TaskCompletedChanged is emitted when a task's completion state is changed, this happens when:
     * 
     *     1. User marks a task as completed.
     * 
     *     2. User marks a task as incomplete.
     * 
     *     3. User starts working on a task which cause the task to be marked incomplete.
     * 
     * <br>
     * Argument: {@link TaskEventArg}
     * <blockquote>TaskCompletedChanged will not be emitted when a task is downloaded from Iridium Cloud, see {@link IridiumApp.TaskEvents | TaskEvents.TaskDownloaded} </blockquote>
     */
    TaskCompletedChanged: "TaskCompletedChanged",
    /**
     * TaskDueDateChanged is emitted when a task's duedate is changed
     *  
     * <br>
     * Argument: {@link TaskEventArg}
     */
    TaskDueDateChanged: "TaskDueDateChanged",
    /**
     * TaskDeleted is emitted when a task is deleted by the user. 
     * <br>
     * Argument: {@link TaskDeletedEventArg}
     * <blockquote>TaskDeleted will not be emitted when a task is removed from Iridium Cloud, see {@link IridiumApp.TaskEvents | TaskEvents.TaskDeletedCloud} </blockquote>
     * <blockquote>TaskDeleted will not be emitted when a task is moved out of a list into another list, see {@link IridiumApp.TaskEvents | TaskEvents.TaskMoved} </blockquote>
     */
    TaskDeleted: "TaskDeleted",
    /**
     * TaskMoved is emitted when a task is moved from one list to another by the user. 
     * <br>
     * Argument: {@link TaskMovedEventArg}
     * <blockquote>TaskMoved will not be emitted when a task is moved by another user and synced from Iridium Cloud, see {@link IridiumApp.TaskEvents | TaskEvents.TaskDeletedCloud} and {@link IridiumApp.TaskEvents | TaskEvents.TaskDownloaded} </blockquote>
     */
    TaskMoved: "TaskMoved",
    
    /**
     * TaskListProgressUpdated is emitted when complete or progress percentage of a task list is changed. This can happen when user create a new task, mark a task in progress etc. This will also happen when data downloaded from Iridium Cloud changes a task lists' progress.
     * <br>
     * Argument: {@link TaskListProgressUpdatedEventArg}
     */
    TaskListProgressUpdated: "TaskListProgressUpdated"
}
