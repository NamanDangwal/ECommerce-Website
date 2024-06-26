
import { Typography, Box, styled } from '@mui/material';

const Component = styled(Box)`
    width: 80%%;
    height: 65vh;
    background: #fff;
    margin: 80px 140px;
`;

const Container = styled(Box)`
    text-align: center;
    padding-top: 70px;
`;

const Image = styled('img')({
    width: '15%'
});


const EmptyCart = () => {
    const imgurl = 'data:image/png;base64,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';
    
    return (
        <Component>
            <Container>
                <Image src={imgurl} />
                <Typography>Your cart is empty!</Typography>
                <Typography component="span">Add items in your cart and be a family of CRAFTZIO</Typography>
            </Container>
        </Component>
    )
}

export default EmptyCart;