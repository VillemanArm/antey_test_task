import {ref, computed, watch} from 'vue'
import {defineStore} from 'pinia'

declare global {
    interface VacancyItem {
        id: number
        title: string
        salary: Salary

    }

    interface VacancyListFilterParameters {
        title: string
        salaryFrom: number
        salaryTo: number
        sortDescending: boolean
    }
}

type VacancySortOptions = 'title' | 'salary' | ''

interface Salary {
    value: number
    currencies: Currency[]
}

interface Currency {
    label: CurrencyNames
    coefficient: number
}

type CurrencyNames = 'USD' | 'RUB'

export const useVacanciesStore = defineStore('vacancies', () => {

    const vacancyItems = ref<VacancyItem[]>([])

    const getVacanciesList = () => {
        // заглушка получения данных с сервера
        vacancyItems.value = [
            {
                "id": 1,
                "title": "Driver",
                "salary": {
                    "value": 10000,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 2,
                "title": "Engineer",
                "salary": {
                    "value": 15000,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 3,
                "title": "Manager",
                "salary": {
                    "value": 12000,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 4,
                "title": "Teacher",
                "salary": {
                    "value": 9000,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 5,
                "title": "Designer",
                "salary": {
                    "value": 11000,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 6,
                "title": "Developer",
                "salary": {
                    "value": 13000,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 7,
                "title": "Nurse",
                "salary": {
                    "value": 8500,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 8,
                "title": "Doctor",
                "salary": {
                    "value": 20000,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 9,
                "title": "Chef",
                "salary": {
                    "value": 9500,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 10,
                "title": "Pilot",
                "salary": {
                    "value": 22000,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 11,
                "title": "Driver",
                "salary": {
                    "value": 10500,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 12,
                "title": "Engineer",
                "salary": {
                    "value": 14500,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 13,
                "title": "Manager",
                "salary": {
                    "value": 12500,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 14,
                "title": "Teacher",
                "salary": {
                    "value": 9500,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 15,
                "title": "Designer",
                "salary": {
                    "value": 11500,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 16,
                "title": "Developer",
                "salary": {
                    "value": 13500,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 17,
                "title": "Nurse",
                "salary": {
                    "value": 8700,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 18,
                "title": "Doctor",
                "salary": {
                    "value": 20500,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 19,
                "title": "Chef",
                "salary": {
                    "value": 9800,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            },
            {
                "id": 20,
                "title": "Pilot",
                "salary": {
                    "value": 22500,
                    "currencies": [
                        {
                            "label": "USD",
                            "coefficient": 0.012
                        },
                        {
                            "label": "RUB",
                            "coefficient": 1
                        }
                    ]
                }
            }
        ]

    }


    return {
        vacancyItems,
        getVacanciesList
    }
})
