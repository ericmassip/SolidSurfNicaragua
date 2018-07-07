import { Activity } from '../../models/activity/activity.interface';

const tourActivities: Activity[] = [
    { 
        showInfo: {
            title: 'LEON CITY TOUR',
            distance: '60 km / 1 hr. drive',
            tourLength: '5 hrs.',
            pmDeparture: 'Anytime',
            energyLevel: 'Low',
            categories: 'Couples, Family, Friends, Chill'
        }, orderInfo: {
            distance: 2,
            tourLength: 2,
            pmDeparture: 1,
            energyLevel: 1,
            categories: ['Couples', 'Family', 'Friends', 'Chill']
        }, 
        isSelected: false,
        isHidden: false
    },
    {
        showInfo: {
            title: 'LEON / SAND BOARDING',
            distance: '85 km / 1 hr. 45 min.',
            tourLength: '8 hrs.',
            pmDeparture: '2:00 pm',
            energyLevel: 'High',
            categories: 'Couples, Family, Friends, Active'
        }, orderInfo: {
            distance: 3,
            tourLength: 4,
            pmDeparture: 3,
            energyLevel: 7,
            categories: ['Couples', 'Family', 'Friends', 'Active']
        }, 
        isSelected: false,
        isHidden: false
    },
    {
        showInfo: {
            title: 'LEON / RUM FACTORY',
            distance: '90 km / 2 hr. drive',
            tourLength: '8 hrs.',
            pmDeparture: '8:30 am / 11:00 appointment',
            energyLevel: 'Low',
            categories: 'Couples, Friends, Chill'
        }, orderInfo: {
            distance: 4,
            tourLength: 5,
            pmDeparture: 9,
            energyLevel: 2,
            categories: ['Couples', 'Friends', 'Chill']
        }, 
        isSelected: false,
        isHidden: false
    },
    {
        showInfo: {
            title: 'GRANADA CITY TOUR',
            distance: '100 km / 2 hr. drive',
            tourLength: '6 hrs.',
            pmDeparture: 'Anytime',
            energyLevel: 'Low',
            categories: 'Couples, Friends, Chill'
        }, orderInfo: {
            distance: 5,
            tourLength: 3,
            pmDeparture: 2,
            energyLevel: 3,
            categories: ['Couples', 'Friends', 'Chill']
        }, 
        isSelected: false,
        isHidden: false
    },
    {
        showInfo: {
            title: 'GRANADA / ZIP-LINING',
            distance: '115 km / 2.5 hr. drive',
            tourLength: '12 hrs.',
            pmDeparture: '7:30 am / 10:00 appointment',
            energyLevel: 'High',
            categories: 'Couples, Family, Friends, Active'
        }, orderInfo: {
            distance: 7,
            tourLength: 8,
            pmDeparture: 6,
            energyLevel: 8,
            categories: ['Couples', 'Family', 'Friends', 'Active']
        }, 
        isSelected: false,
        isHidden: false
    },
    {
        showInfo: {
            title: 'GRANADA / CRATER TRAIL',
            distance: '115 km / 2.5 hr. drive',
            tourLength: '11 hrs. / Hike 1.5 hrs.',
            pmDeparture: '7:30 am',
            energyLevel: 'Moderate',
            categories: 'Couples, Family, Friends, Active'
        }, orderInfo: {
            distance: 8,
            tourLength: 7,
            pmDeparture: 4,
            energyLevel: 5,
            categories: ['Couples', 'Family', 'Friends', 'Active']
        }, 
        isSelected: false,
        isHidden: false
    },
    {
        showInfo: {
            title: 'GRANADA / TRIGILLO TRAIL',
            distance: '115 km / 2.5 hr. drive',
            tourLength: '12 hrs. / Hike 2.5 hrs.',
            pmDeparture: '7:30 am',
            energyLevel: 'High',
            categories: 'Couples, Family, Friends, Active'
        }, orderInfo: {
            distance: 9,
            tourLength: 9,
            pmDeparture: 5,
            energyLevel: 9,
            categories: ['Couples', 'Family', 'Friends', 'Active']
        }, 
        isSelected: false,
        isHidden: false
    },
    {
        showInfo: {
            title: 'GRANADA / VOLCANO (NIGHT)',
            distance: '100 km / 2 hr. drive',
            tourLength: '8 hrs.',
            pmDeparture: '1:00 pm / Crater by 6pm',
            energyLevel: 'Low',
            categories: 'Couples, Family, Friends, Chill'
        }, orderInfo: {
            distance: 6,
            tourLength: 6,
            pmDeparture: 8,
            energyLevel: 4,
            categories: ['Couples', 'Family', 'Friends', 'Chill']
        }, 
        isSelected: false,
        isHidden: false
    },
    { 
        showInfo: {
            title: 'FISHING / BOAT TRIP',
            distance: '0 km / 0 hrs.',
            tourLength: '4 hrs.',
            pmDeparture: '7:00 am',
            energyLevel: 'Moderate',
            categories: 'Friends, Active'
        }, orderInfo: {
            distance: 1,
            tourLength: 1,
            pmDeparture: 3,
            energyLevel: 6,
            categories: ['Friends', 'Active']
        }, 
        isSelected: false,
        isHidden: false
    }
]

export const TOUR_ACTIVITIES = tourActivities;

const localActivities: Activity[] = [
    { 
        showInfo: {
            title: 'HORSEBACK RIDING',
            distance: '',
            tourLength: '1 hr.',
            pmDeparture: '4:30 pm',
            energyLevel: 'Low',
            categories: 'Couples, Family, Chill'
        }, orderInfo: {
            distance: 4,
            tourLength: 3,
            pmDeparture: 5,
            energyLevel: 2,
            categories: ['Couples', 'Family', 'Chill']
        }, 
        isSelected: false,
        isHidden: false
    },
    { 
        showInfo: {
            title: 'MASSAGE',
            distance: '',
            tourLength: '30min / 1hr. / 1.5 hrs.',
            pmDeparture: 'Anytime',
            energyLevel: 'Low',
            categories: 'Chill'
        }, orderInfo: {
            distance: 1,
            tourLength: 2,
            pmDeparture: 1,
            energyLevel: 1,
            categories: ['Chill']
        }, 
        isSelected: false,
        isHidden: false
    },
    { 
        showInfo: {
            title: 'SURF LESSONS',
            distance: '',
            tourLength: '1 hr.',
            pmDeparture: 'Low Tide (Beginners)',
            energyLevel: 'High',
            categories: 'Couples, Friends, Active'
        }, orderInfo: {
            distance: 3,
            tourLength: 4,
            pmDeparture: 4,
            energyLevel: 5,
            categories: ['Couples', 'Friends', 'Active']
        }, 
        isSelected: false,
        isHidden: false
    },
    { 
        showInfo: {
            title: 'YOGA',
            distance: '',
            tourLength: '30 min / 1 hr.',
            pmDeparture: 'Anytime',
            energyLevel: 'Moderate',
            categories: 'Couples, Family, Friends, Active'
        }, orderInfo: {
            distance: 2,
            tourLength: 1,
            pmDeparture: 2,
            energyLevel: 3,
            categories: ['Couples', 'Family', 'Friends', 'Active']
        }, 
        isSelected: false,
        isHidden: false
    },
    { 
        showInfo: {
            title: 'VOLUNTEERING',
            distance: '',
            tourLength: '1 - 2 hrs.',
            pmDeparture: 'Varies based on activity',
            energyLevel: 'High',
            categories: 'Couples, Family, Friends, Active'
        }, orderInfo: {
            distance: 5,
            tourLength: 5,
            pmDeparture: 3,
            energyLevel: 4,
            categories: ['Couples', 'Family', 'Friends', 'Active']
        }, 
        isSelected: false,
        isHidden: false
    }
]

export const LOCAL_ACTIVITIES = localActivities;