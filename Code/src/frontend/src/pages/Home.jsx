import './Home.css';
import logo from '../assets/colabora.png';
import lupa from '../assets/lupa.png';
import mais from '../assets/mais.svg';
import main_materials from "../mocks/main_materials.json"
import Card from '../components/Card';
import AddMaterialModal from '../components/AddMaterialModal';
import { useState, useEffect } from 'react';
// import MaterialService from '../services/MaterialService';


function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [mainMaterials, setMainMaterials] = useState([]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const addMaterial = (materialInfo) => {
        // apagar console depois
        console.log('Material Info:', materialInfo);
        // MaterialService.adicionarMaterial(materialInfo)
        //     .then((response) => {
        //         setMainMaterials(prevMaterials => [...prevMaterials, response]);
        //     })
        //     .catch((error) => {
        //         console.error('Erro ao adicionar material:', error);
        //     });
    };

    // useEffect(() => {
    //     const carregarMateriais = async () => {
    //         try {
    //             const materiais = await MaterialService.getAllMaterials();
    //             setMainMaterials(materiais);
    //         } catch (error) {
    //             console.error('Erro ao obter materiais:', error);
    //         }
    //     };

    //     carregarMateriais();
    // }, []);

    return (
        <>
            <header>
                <nav>
                    <div className='nav-div1'>
                        <h1 className='nav-h1'>ColaboraCIn</h1>
                        <img
                            src={logo}
                            alt="Logo"
                            className='nav-img'
                        />
                    </div>
                    <div className='nav-div2'>
                        <a href="#" className="search-icon">
                            <img
                                src={lupa}
                                alt="Icone de lupa"
                                className="nav-img2"
                            />
                        </a>
                        <div className='nav-div2-div'>
                            <a className='nav-div-a' onClick={openModal}>
                                Adicionar material
                            </a>
                            <img
                                src={mais}
                                alt="Icone de mais"
                                className="nav-img2"
                            />
                        </div>
                    </div>
                </nav>
            </header>

            <main>

                {isModalOpen ?
                    <AddMaterialModal onClose={closeModal} onAddMaterial={addMaterial} />
                    :
                    // mainMaterials.map((material) => (
                    // descomentar linha depois 
                    main_materials.map((material) => (
                        <Card
                            key={material._id}
                            titulo={material.titulo}
                            codigoDisciplina={material.codigoDisciplina}
                            assunto={material.assunto}
                            professor={material.professor}
                            autor={material.autor}
                            periodo={material.periodo}
                            curso={material.curso}
                            url={material.url}
                        />
                    ))}
            </main>

            <footer>
                <h4>
                    2023 - <a className="a-footer" href="https://github.com/geovannaadomingos/ProjetoEngenhariaDeSoftware" target="_blank" rel="noreferrer">Repositório com mais informações</a>
                </h4>
            </footer>
        </>
    );
}

export default Home;
