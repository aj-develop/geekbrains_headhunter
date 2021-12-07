import { Provider } from '@domain/Provider.js';
import { Vacancy } from '@domain/Vacancy.js';
import { instance as api } from "@api";

export class HHprovider extends Provider {
    static name = 'hh';
    static _url = 'https://api.hh.ru/';
    static _header = {'HH-User-Agent': 'api-test-agent'};

    find(filter) {
        api.interceptors.request.use(config => {
            config.headers.common[Object.keys(HHprovider._header)[0]] = Object.values(HHprovider._header)[0];
            return config;
          });
        return api.get(
            HHprovider._url + 'vacancies?' +
            this.convertFilterToQueryStr(filter)
        )
            .then((response) => {
                console.log(response);
                if (response.status != 200) {
                    throw new Error(response.statusText)
                }
                return this.convertVacanciesListResponse(response.data.items);
            })
    }

    convertFilterToQueryStr(filter) {
        let url = '';
        url = `text=${filter.text}&` + `per_page=${filter.count}&` + 'vacancy_search_order=publication_time';
        return url;
    }

    convertVacanciesListResponse(items) {
        return items.map((item) => {
            return this.convertVacancyResponse(item)
        })
    }

    convertVacancyResponse(item) {
        let salary = '';
        let salary_from = null;
        let salary_to = null;
        let currency = null;
        if (item.salary) {
            salary += item.salary.from ? `[${item.salary.from},` : '[,';
            salary += item.salary.to ? `${item.salary.to}]` : ')';
            currency = item.salary.currency;
            salary_from = item.salary.from;
            salary_to = item.salary.to;
        }
        else {
            salary = null;
        }
        return new Vacancy(
            HHprovider.name,
            item.id,
            item.name,
            item.employer.logo_urls ? item.employer.logo_urls[90] : null,
            salary,
            salary_from,
            salary_to,
            currency === 'RUR' ? 'RUB' : currency,
            item.published_at,
            item.area.name,
            item.snippet.requirement ? item.snippet.requirement.replace(/[<highlighttext>|</highlighttext>]/g, '') : null,
            item.snippet.responsibility ? item.snippet.responsibility.replace(/[<highlighttext>|</highlighttext>]/g, '') : null,
            item.alternate_url,
            item.employer.name,
            0
        )
    }
}
