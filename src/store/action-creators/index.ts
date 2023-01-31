import * as UserActionCreators from './user'
import * as TodoActionCreators from './todos'
import * as CountriesActionCreators from './countries'

export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...CountriesActionCreators
}