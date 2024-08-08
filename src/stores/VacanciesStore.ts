import {ref, computed, watch} from 'vue'
import {defineStore} from 'pinia'

declare global {
    interface VacancyItem {
        id: number
        title: string
        salary: Salary
        isHide: boolean
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
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
                },
                "isHide": false
            }
        ]

    }

    const currency = ref<CurrencyNames>('RUB')

    const hideVacancy = (id: number) => {
        for (let i = 0; i < vacancyItems.value.length; i++) {
            if (vacancyItems.value[i].id === id) {
                vacancyItems.value[i].isHide = true
            }
        }

    }

    const filteredVacancies = computed(() => {
        return vacancyItems.value.filter((vacancy) => !vacancy.isHide)
    })

    return {
        filteredVacancies,
        getVacanciesList,
        currency,
        hideVacancy
    }
})
