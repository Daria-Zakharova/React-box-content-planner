import { PageHeading } from 'components/Heading/Heading';
import { Page404 } from 'components/Page404/Page404';
import { AppCard } from 'components/SharedLayout/SharedLayout.styled';


export default function PageNotFound () {
    return (
    <AppCard>
        <PageHeading text = "404"/>
        <Page404 seconds={8}/>
    </AppCard>)
}