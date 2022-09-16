import courses from "./courses";
import studyGroups from "./studyGroups";

type Course = {
    id: number;
    studyGroupId: number;
    title: string;
    keywords: string[];
    eventType: string;
}

type StudyGroup = {
    id: number;
    courseId: number;
    title: string;
    keywords: string[];
    eventType: string;
}

type SearchEventsOptions = {
    parameter: string | number;
    eventType: 'courses' | 'groups'
}

let enrolledEvents: (Course | StudyGroup)[] = [];

let anotherArray = [];

function searchEvents(options: SearchEventsOptions){
    const events: (Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;

    return events.filter((event: Course | StudyGroup) => {
        if(typeof options.parameter === 'number'){
            return event.id === options.parameter
        }

        if(typeof options.parameter === 'string'){
            return event.keywords.indexOf(options.parameter) > -1;
        }
    });
}

function enroll(event: Course | StudyGroup){
    enrolledEvents = [...enrolledEvents, event] // spread operator
}

const searchResults = searchEvents({parameter: 'art', eventType: 'courses' })

// enroll(searchResults[0]);

searchResults.forEach(x => [
    enroll(x)
])

console.log(enrolledEvents);
