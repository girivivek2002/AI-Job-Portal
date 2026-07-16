import Button from '@mui/material/Button'
import React from 'react'

const AppButton = ({
    children,
    loading = false,
    ...props
}) => {
    return (
        <Button
            disable={loading}
            fullWidth
            variant="contained"
            sx={{
                height: 48,
                borderRadius: 2,
                fontWeight: 600,
            }}
            {...props}

        >
            {loading ? "Loading..." : children}

        </Button>
    )
}

export default AppButton
