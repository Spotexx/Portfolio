/* #region  Wrappers and backgrounds */
export const flexWrapperOuterStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    width: '100vw'
} as const
export const flexWrapperInnerStyle = {
    position: 'relative',
    display: 'flex',
    height: '100%',
    width: '100%'
} as const
export const centerItem = {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
}

export const backgroundStyle = {
    bgcolor: 'primary.main'
}
export const backdropImgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -100
} as const
export const foregroundStyle = {
    position: 'relative',
    zIndex: 100
} as const
/* #endregion */
/* #region  texts */
export const titleStyle = {
    color: 'text.primary',
    fontSize: '80px',
}
export const textContentStyle = {
    color: 'text.primary',
    fontSize: '40px'
}
export const titleContainer = {
    height: 'auto',
}
/* #endregion */
/* #region  component styles */
export const paperStyle = {
    bgcolor: 'background.paper',
    margin: 2
}
export const buttonStyle = {
    bgcolor: 'secondary.light',
    color: 'text.primary',
}
/* #endregion */