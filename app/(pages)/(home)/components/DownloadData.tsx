import { useState, useEffect } from "react";
import Image from "next/image";
import { tasks } from "../../../../constants";
import { Task } from "../../../../types/tasks";
import { FlickeringGrid } from "../../../components/FlickeringGrid";

const DownloadData: React.FC = () => {
  const [states, setStates] = useState<Task[]>(tasks);

  // Simulate progress for tasks and subtasks
  useEffect(() => {
    const interval = setInterval(() => {
      setStates((prevStates) => {
        const newStates = [...prevStates];
        let activeTaskIndex = newStates.findIndex(
          (task) => task.status === "inprogress"
        );

        // If no active task, start the first pending task
        if (activeTaskIndex === -1) {
          activeTaskIndex = newStates.findIndex(
            (task) => task.status === "pending"
          );
          if (activeTaskIndex !== -1) {
            newStates[activeTaskIndex].status = "inprogress";
            // If the task has subtasks, start the first subtask
            if (newStates[activeTaskIndex].tasks?.length > 0) {
              newStates[activeTaskIndex].tasks[0].status = "inprogress";
            }
          }
          return newStates;
        }

        const activeTask = newStates[activeTaskIndex];

        // Case 1: Task has subtasks
        if (activeTask.tasks?.length > 0) {
          const activeSubtaskIndex = activeTask.tasks.findIndex(
            (subtask) => subtask.status === "inprogress"
          );

          // If no active subtask, start the first pending subtask
          if (activeSubtaskIndex === -1) {
            const nextSubtaskIndex = activeTask.tasks.findIndex(
              (subtask) => subtask.status === "pending"
            );
            if (nextSubtaskIndex !== -1) {
              activeTask.tasks[nextSubtaskIndex].status = "inprogress";
            }
            return newStates;
          }

          const activeSubtask = activeTask.tasks[activeSubtaskIndex];
          const increment = 100 / (activeSubtask.timeLeft * 10); // 100% over timeLeft seconds (10 ticks per second)

          // Update subtask progress
          if (activeSubtask.completedPercentage < 100) {
            activeSubtask.completedPercentage = Math.min(
              activeSubtask.completedPercentage + increment,
              100
            );
            activeSubtask.timeLeft = Math.max(activeSubtask.timeLeft - 0.1, 0);
          }

          // Mark subtask as completed when done
          if (activeSubtask.completedPercentage >= 100) {
            activeSubtask.status = "completed";
            activeSubtask.completedPercentage = 100;
            activeSubtask.timeLeft = 0;

            // Check if there's a next subtask
            const nextSubtaskIndex = activeTask.tasks.findIndex(
              (subtask, idx) =>
                idx > activeSubtaskIndex && subtask.status === "pending"
            );

            if (nextSubtaskIndex !== -1) {
              // Start the next subtask
              activeTask.tasks[nextSubtaskIndex].status = "inprogress";
            } else {
              // All subtasks completed, mark task as completed
              activeTask.status = "completed";

              // Start the next task if available
              const nextTaskIndex = newStates.findIndex(
                (task, idx) =>
                  idx > activeTaskIndex && task.status === "pending"
              );
              if (nextTaskIndex !== -1) {
                newStates[nextTaskIndex].status = "inprogress";
                if (newStates[nextTaskIndex].tasks?.length > 0) {
                  newStates[nextTaskIndex].tasks[0].status = "inprogress";
                }
              } else {
                // All tasks completed, stop the interval
                clearInterval(interval);
              }
            }
          }
        } else {
          // Case 2: Task has no subtasks
          const increment = 100 / (activeTask.timeLeft * 10); // 100% over timeLeft seconds (10 ticks per second)

          // Update task progress
          if (activeTask.completedPercentage < 100) {
            activeTask.completedPercentage = Math.min(
              activeTask.completedPercentage + increment,
              100
            );
            activeTask.timeLeft = Math.max(activeTask.timeLeft - 0.1, 0);
          }

          // Mark task as completed when done
          if (activeTask.completedPercentage >= 100) {
            activeTask.status = "completed";
            activeTask.completedPercentage = 100;
            activeTask.timeLeft = 0;

            // Start the next task if available
            const nextTaskIndex = newStates.findIndex(
              (task, idx) => idx > activeTaskIndex && task.status === "pending"
            );
            if (nextTaskIndex !== -1) {
              newStates[nextTaskIndex].status = "inprogress";
              if (newStates[nextTaskIndex].tasks?.length > 0) {
                newStates[nextTaskIndex].tasks[0].status = "inprogress";
              }
            } else {
              // All tasks completed, stop the interval
              clearInterval(interval);
            }
          }
        }

        return newStates;
      });
    }, 100); // Update every 100ms for smooth progress

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-overlay-dark z-40"></div>
      <div className="relative z-50 bg-primary-dark p-4 md:p-8 rounded-md shadow-[0px_16px_32px_0px_rgba(#00000040)] w-11/12 max-w-[480px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/icons/espn.svg" width={20} height={20} alt="tool" />
            <p className="text-light text-lg font-medium font-volksansTest">
              Downloading data
            </p>
          </div>
        </div>

        <div className="my-8 flex flex-col gap-4">
          {states.map((state, index) => (
            <div
              key={index}
              className="bg-secondary-dark relative rounded-md p-4 md:p-6"
            >
              {state.status === "inprogress" && (
                <div className="absolute top-1 left-1 right-0 bottom-0 z-10 w-full h-full">
                  <FlickeringGrid
                    className="w-full h-full"
                    squareSize={4}
                    gridGap={5}
                    color="#393939"
                    maxOpacity={0.2}
                    flickerChance={0.5}
                  />
                </div>
              )}
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className={`font-volksansTest ${
                      state.status === "completed"
                        ? "text-accent-green"
                        : "text-light"
                    }`}
                  >
                    {state.name}
                  </p>
                  {state.status !== "pending" && state.subText && (
                    <p className="text-xs text-muted font-volksansTest left-0 mt-0.5">
                      {state.subText}
                    </p>
                  )}
                </div>
                {state.status === "completed" && (
                  <div className="bg-muted-white border border-muted-white w-8 h-8 flex justify-center items-center rounded">
                    <Image
                      src="/icons/check.svg"
                      width={16}
                      height={16}
                      alt="completed"
                    />
                  </div>
                )}
                {state.status === "inprogress" && !state.tasks?.length && (
                  <Image
                    src="/icons/spinner.svg"
                    width={16}
                    height={16}
                    alt="spinner"
                    className="animate-spinner"
                  />
                )}
              </div>
              {state.status !== "pending" &&
                state.status !== "completed" &&
                state.tasks?.length > 0 && (
                  <div className="mt-4 space-y-2 p-3 bg-subtask-bg rounded">
                    {state.tasks.map((task, taskIndex) => (
                      <div
                        key={taskIndex}
                        className={`flex flex-col gap-1 ${
                          taskIndex !== state.tasks.length - 1
                            ? "border-b border-subtask-border pb-3"
                            : ""
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <p
                            className={`text-sm font-volksansTest ${
                              task.status === "completed"
                                ? "text-accent-green"
                                : "text-light"
                            }`}
                          >
                            {task.name}
                          </p>

                          {task.status === "completed" && (
                            <Image
                              src="/icons/check.svg"
                              width={12}
                              height={12}
                              alt="completed"
                            />
                          )}
                        </div>
                        {task.status === "inprogress" && (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <p className="text-xs text-muted font-volksansTest">
                                {Math.round(task.completedPercentage)}%
                              </p>
                              <p className="w-0.5 h-0.5 bg-muted rounded-full mx-2"></p>
                              <p className="text-xs text-muted font-volksansTest">
                                {Math.round(task.timeLeft)}s Left
                              </p>
                            </div>
                            <Image
                              src="/icons/spinner.svg"
                              width={12}
                              height={12}
                              alt="spinner"
                              className="animate-spinner"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>
        <p className="text-muted text-sm text-center font-volksansTest">
          We’ll redirect you once done.
        </p>
      </div>
    </div>
  );
};

export default DownloadData;
