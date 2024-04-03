import React from 'react'
import { useParams } from "react-router-dom";
import { BreadCrumb } from '../../components'
import { Projects} from "../../assets/data";

const SingleProject = () => {
    const { id } = useParams();
    const project = Projects.find((p) => p.id === id);
  return (
    <>
    <BreadCrumb title={project.bage.title} desc='At Sara Electrical, our mission is to empower individuals, businesses, and communities through excellence.' img="/public/images/49.png"/>
        <section className='single_project'>
        <div className="container">
            <h2>single project</h2>
        </div>
    </section>
    </>
  )
}

export default SingleProject