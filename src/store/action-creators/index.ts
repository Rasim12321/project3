import * as UserActionCreators from './user'
import * as TodoActionCreators from './todos'
import * as CountriesActionCreators from './countries'
import * as CartActionCreators from './cart'


export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...CountriesActionCreators,
    ...CartActionCreators
}