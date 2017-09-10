import { Activity } from '../../models/activity/activity.interface';

const tourActivities: Activity[] = [
    { 
        showInfo: {
            title: 'LEON CITY TOUR',
            distance: '60 km / 1 hr. drive',
            tourLength: '5 hrs.',
            pmDeparture: 'Anytime',
            energyLevel: 'Low',
            cost: '$20-40',
            categories: 'Couples, Family, Friends, Chill'
        }, orderInfo: {
            distance: 2,
            tourLength: 2,
            pmDeparture: 1,
            energyLevel: 1,
            cost: 3,
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
            cost: '$15-40',
            categories: 'Couples, Family, Friends, Active'
        }, orderInfo: {
            distance: 3,
            tourLength: 4,
            pmDeparture: 3,
            energyLevel: 7,
            cost: 2,
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
            cost: '$30-40',
            categories: 'Couples, Friends, Chill'
        }, orderInfo: {
            distance: 4,
            tourLength: 5,
            pmDeparture: 9,
            energyLevel: 2,
            cost: 5,
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
            cost: '$20-40',
            categories: 'Couples, Friends, Chill'
        }, orderInfo: {
            distance: 5,
            tourLength: 3,
            pmDeparture: 2,
            energyLevel: 3,
            cost: 4,
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
            cost: '$50-75',
            categories: 'Couples, Family, Friends, Active'
        }, orderInfo: {
            distance: 7,
            tourLength: 8,
            pmDeparture: 6,
            energyLevel: 8,
            cost: 9,
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
            cost: '$40-60',
            categories: 'Couples, Family, Friends, Active'
        }, orderInfo: {
            distance: 8,
            tourLength: 7,
            pmDeparture: 4,
            energyLevel: 5,
            cost: 7,
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
            cost: '$45-60',
            categories: 'Couples, Family, Friends, Active'
        }, orderInfo: {
            distance: 9,
            tourLength: 9,
            pmDeparture: 5,
            energyLevel: 9,
            cost: 8,
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
            cost: '$30-50',
            categories: 'Couples, Family, Friends, Chill'
        }, orderInfo: {
            distance: 6,
            tourLength: 6,
            pmDeparture: 8,
            energyLevel: 4,
            cost: 6,
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
            cost: '$0',
            categories: 'Friends, Active'
        }, orderInfo: {
            distance: 1,
            tourLength: 1,
            pmDeparture: 3,
            energyLevel: 6,
            cost: 1,
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
            cost: '$15',
            categories: 'Couples, Family, Chill'
        }, orderInfo: {
            distance: 4,
            tourLength: 3,
            pmDeparture: 5,
            energyLevel: 2,
            cost: 3,
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
            cost: '$20 / $30 / $45',
            categories: 'Chill'
        }, orderInfo: {
            distance: 1,
            tourLength: 2,
            pmDeparture: 1,
            energyLevel: 1,
            cost: 5,
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
            cost: '$30 (1 Lesson Free)',
            categories: 'Couples, Friends, Active'
        }, orderInfo: {
            distance: 3,
            tourLength: 4,
            pmDeparture: 4,
            energyLevel: 5,
            cost: 4,
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
            cost: '$5 / $10 (2 Classes Free)',
            categories: 'Couples, Family, Friends, Active'
        }, orderInfo: {
            distance: 2,
            tourLength: 1,
            pmDeparture: 2,
            energyLevel: 3,
            cost: 2,
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
            cost: '$0 / Donations Welcome',
            categories: 'Couples, Family, Friends, Active'
        }, orderInfo: {
            distance: 5,
            tourLength: 5,
            pmDeparture: 3,
            energyLevel: 4,
            cost: 1,
            categories: ['Couples', 'Family', 'Friends', 'Active']
        }, 
        isSelected: false,
        isHidden: false
    }
]

export const LOCAL_ACTIVITIES = localActivities;