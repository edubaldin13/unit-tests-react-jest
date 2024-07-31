import { http, HttpResponse} from 'msw'
import { UserMock } from '../mock'

export const handlers = [
    http.get('https://example.com.br/get/user', () =>{
        return HttpResponse.json({
            id: 1,
            firstName: 'Eduardo',
            lastName: 'Baldin',
            age: '22'
        }, {
            id: 2,
            firstName: 'Eduardo',
            lastName: 'Bertoli',
            age: '20'
        }, {
            id: 2,
            firstName: 'Murilo',
            lastName: 'FlutterGuy',
            age: '34'
        })
    }),

    //using mock files
    http.get('/user/*', UserMock),

    //mocking status codes
    http.get('/apples', () => {
        return new HttpResponse(null, {
            status: 404,
            statusText: 'Out Of Apples',
        })
    }),

    //using headers
    http.post('/auth', () => {
        return new HttpResponse(null, {
                headers: {
                    'Set-Cookie': 'mySecret=abc-123',
                    'X-Custom-Header': 'yes',
                },
            })
        }),
    
]