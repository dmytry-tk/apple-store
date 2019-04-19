
const phonesLoaded = (newBooks) => {
    return {
        type: 'PHONES_LOADED',
        payload: newBooks
    }
}
const phonesRequested = () => {
    return {
        type: 'PHONES_REQUESTED'
    }
}

const phonesError = (error) => {
    return{
        type: 'BOOKS_ERROR',
        payload: error
    }
}

export {
  phonesLoaded,
  phonesRequested,
  phonesError
};