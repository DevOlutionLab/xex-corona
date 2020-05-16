

export interface MapChartData {
    'id': number
    'code': string;
    'name': string;
    'cases': number;
    "departments": string;
    'details': [{
        'id': number;
        'department': string;
        'cases': number;
    }]
}