import * as UserActionCreators from './user'
import * as TodoActionCreators from './todos'

export default {
    ...TodoActionCreators,
    ...UserActionCreators
}