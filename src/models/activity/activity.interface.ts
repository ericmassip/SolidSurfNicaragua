export interface Activity {
    showInfo: {
        title: string,
        distance: string,
        tourLength: string,
        pmDeparture: string,
        energyLevel: string,
        cost: string,
        categories: string,
    },
    orderInfo: {
        distance: number,
        tourLength: number,
        pmDeparture: number,
        energyLevel: number,
        cost: number,
        categories: string[]
    }, 
    isSelected: boolean,
    isHidden: boolean,
    preferredDay?: Date,
    numberOfPeople?: number,
    numberOfTimes?: number,
    note?: string
}