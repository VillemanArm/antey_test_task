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
    
    type CurrencyNames = 'USD' | 'RUB'
}

type VacancySortOptions = 'title' | 'salary' | ''

interface Salary {
    value: number
    currencies: Currencies
}

interface Currencies {
    RUB: number
    USD: number
}

export const useVacanciesStore = defineStore('vacancies', () => {

    const vacancyItems = ref<VacancyItem[]>([])

    const getVacanciesList = () => {
        // заглушка получения данных с сервера
        vacancyItems.value = [
            {
                "id": 1,
                "title": "Driver",
                "salary": {
                    "value": 100000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 2,
                "title": "Engineer",
                "salary": {
                    "value": 150000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 3,
                "title": "Manager",
                "salary": {
                    "value": 120000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 4,
                "title": "Teacher",
                "salary": {
                    "value": 90000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 5,
                "title": "Designer",
                "salary": {
                    "value": 110000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 6,
                "title": "Developer",
                "salary": {
                    "value": 130000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 7,
                "title": "Nurse",
                "salary": {
                    "value": 85000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 8,
                "title": "Doctor",
                "salary": {
                    "value": 200000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 9,
                "title": "Chef",
                "salary": {
                    "value": 95000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 10,
                "title": "Pilot",
                "salary": {
                    "value": 220000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 11,
                "title": "Driver",
                "salary": {
                    "value": 105000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 12,
                "title": "Engineer",
                "salary": {
                    "value": 145000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 13,
                "title": "Manager",
                "salary": {
                    "value": 125000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 14,
                "title": "Teacher",
                "salary": {
                    "value": 95000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 15,
                "title": "Designer",
                "salary": {
                    "value": 115000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 16,
                "title": "Developer",
                "salary": {
                    "value": 135000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 17,
                "title": "Nurse",
                "salary": {
                    "value": 87000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 18,
                "title": "Doctor",
                "salary": {
                    "value": 205000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 19,
                "title": "Chef",
                "salary": {
                    "value": 98000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            },
            {
                "id": 20,
                "title": "Pilot",
                "salary": {
                    "value": 225000,
                    "currencies": { "RUB": 1, "USD": 0.012}
                },
                "isHide": false
            }
        ]

    }

    const selectedCurrency = ref<CurrencyNames>('RUB')
    const currencies = ['RUB', 'USD']

    const hideVacancy = (id: number) => {
        for (let i = 0; i < vacancyItems.value.length; i++) {
            if (vacancyItems.value[i].id === id) {
                vacancyItems.value[i].isHide = true
            }
        }

    }

    const searchQuery = ref<string>('')
    const salaryFrom = ref<number>(0)
    const salaryTo = ref<number>(Infinity)
    const isSortDescending = ref<boolean | 'noSort' >('noSort')

    const setSalaryFrom = (event: Event) => {
        const target = event.target as HTMLInputElement 
        if (target.value) {
            const value = Math.round(Number(target.value))
            if (value < 0) {
                target.value = '0'
            } else {
                target.value = String(value)
            }
            salaryFrom.value = Number(target.value)
        }
    }

    const setSalaryTo = (event: Event) => {
        const target = event.target as HTMLInputElement 
        if (target.value) {
            let value = Math.round(Number(target.value))
            if (value < 0) {
                target.value = '0'
            } else if (value < salaryFrom.value) {
                target.value = String(salaryFrom.value)
            } else {
                target.value = String(value)
            }
            salaryTo.value = Number(target.value)
        }
    }

    const filteredVacancies = computed(() => {
        const searchQueryLowerCase = searchQuery.value.toLowerCase()

        const searchedVacancies =  vacancyItems.value.filter((vacancy) => {
            if (!vacancy.isHide ) {
                return vacancy.title.toLowerCase().includes(searchQueryLowerCase)
            }
        })

        const salaryFilteredVacancies = searchedVacancies.filter((vacancy) => {

            return vacancy.salary.value >= salaryFrom.value && vacancy.salary.value <= (!salaryTo.value ? Infinity : salaryTo.value)
        })

        let salarySortedVacancies = salaryFilteredVacancies
        
        if (isSortDescending.value !== 'noSort') {
            salarySortedVacancies = salaryFilteredVacancies.sort((vacancy1, vacancy2) => {
                if (isSortDescending.value) {
                    return vacancy2.salary.value - vacancy1.salary.value
                } else {
                    return vacancy1.salary.value - vacancy2.salary.value
                }
            })
        }


        return salarySortedVacancies
    })

    return {
        filteredVacancies,
        getVacanciesList,
        selectedCurrency,
        currencies,
        hideVacancy,
        searchQuery,
        setSalaryFrom,
        salaryFrom,
        setSalaryTo,
        salaryTo,
        isSortDescending
    }
})
