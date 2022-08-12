import { Row, Col, Divider, Button, Typography } from 'antd';
import CustomLayout from '../../layouts/customLayout';
import { useSelector } from 'react-redux';
import styles from '../../../../styles/NgoDetails.module.css';
import ProjectCard from './ProjectCard';
import NgoSidebarUser from './NgoSidebarUser';
import LeftMenu from '../../layouts/NgosNavbar';
import { useRouter } from 'next/router'

const NgoDesc = () => {
    const { Title, Paragraph } = Typography;
    const router = useRouter()
    const { category, id } = router.query
    const myState = useSelector((state)=> state.detailsReducer);
    const ngos = myState[category].filter((ngo)=>ngo.ngo.id==id)
    console.log(ngos[0].ngo.name);
    // sajna portion
    function handleClick(e) {
        e.preventDefault();
        router.push('/ngosform');
    }
    const state = useSelector((state)=> state.userReducer);
    console.log("state is",state)
    return <CustomLayout>
        
        <div className={styles.container}>
            <Row align="middle" justify='center'>
                <Title className={styles.title} ellipsis>{ ngos[0].ngo.name} </Title>
            </Row>
            <Row justify='center'>
                <LeftMenu />
            </Row>
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={styles.container}>

                <Col lg={{ span: 6 }} md={{ span: 6 }} sm={{ span: 24 }} className={styles.sideBar} justify="center">
                    <NgoSidebarUser ngo={ngos[0].ngo} image={ngos[0].image}/>
                </Col>
                
                <Col lg={{ span: 18 }} md={{ span: 18 }} sm={{ span: 24 }} justify="center">
                    <Row justify='center' id="about">
                        <Title level={3} >About Us</Title>
                        <br/>
                        <br/>
                        <Paragraph>
                            
                            {ngos[0].about_us}
                           
                        </Paragraph>
                    </Row>
                    <Row justify='center' id="services">
                        <Title level={3}>Our Services</Title>
                        <Paragraph>
                        {ngos[0].services}  
                        
                        </Paragraph>
                    </Row>
                    <Row justify='center' id="projects" style={{ margin: "5px" }}>
                        <Title level={3}>Projects</Title>
                        <Paragraph>
                        {ngos[0].projects}   
                        </Paragraph>
                    </Row>

                    
                    

                    <Row justify="center">
                        <ProjectCard />
                        {/* <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard /> */}


                    </Row>

                </Col>

            </Row>

        </div>
    </CustomLayout>
}

export default NgoDesc;
