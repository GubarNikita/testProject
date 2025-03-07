import { useState } from "react";

import "./table.scss";
import { Header } from "src/components/Header";
import IconFile from "src/assets/icons/iconFile.svg";
import IconArrowDown from "src/assets/icons/iconArrowDown.svg";
import IconComponent from "src/assets/icons/iconComponent.svg";

export const Table = () => {
  const [activeComponent, setActiveComponent] = useState<number | null>(null);

  const handleClick = (componentIndex: number) => {
    setActiveComponent(componentIndex);
  };

  const components = [
    { title: "По проекту" },
    { title: "Объекты" },
    { title: "РД" },
    { title: "МТО" },
    { title: "СМР" },
    { title: "График" },
    { title: "МиМ" },
    { title: "Рабочие" },
    { title: "КапВложения" },
    { title: "Бюджет" },
    { title: "Финансирование" },
    { title: "Панорамы" },
    { title: "Камера" },
    { title: "Поручения" },
    { title: "Контрагенты" }
  ];

  const rows = [
    {
      level: 0,
      rowName: "Южная строительная площадка",
      salary: "20 348",
      equipmentCosts: "1 750",
      overheads: "108,07",
      estimatedProfit: "1 209 122,5"
    },
    {
      level: 1,
      rowName: "Фундаментальные работы",
      salary: "20 348",
      equipmentCosts: "1 750",
      overheads: "108,07",
      estimatedProfit: "1 209 122,5"
    },
    {
      level: 2,
      rowName: "Статья работы № 1",
      salary: "20 348",
      equipmentCosts: "1 750",
      overheads: "108,07",
      estimatedProfit: "1 209 122,5"
    },
    {
      level: 0,
      rowName: "Статья работы № 2",
      salary: "20 348",
      equipmentCosts: "1 750",
      overheads: "108,07",
      estimatedProfit: "1 209 122,5"
    },
    {
      level: 1,
      rowName: "Фундаментальные работы",
      salary: "20 348",
      equipmentCosts: "1 750",
      overheads: "108,07",
      estimatedProfit: "1 209 122,5"
    },
    {
      level: 2,
      rowName: "Статья работы № 1",
      salary: "20 348",
      equipmentCosts: "1 750",
      overheads: "108,07",
      estimatedProfit: "1 209 122,5"
    }
  ];

  return (
    <section className="table">
      {/* <ModalRegistration active={modalReg} setActive={setModalReg} /> */}
      <Header />

      <div className="table-project">
        <div className="project-components">
          <div className="project__info">
            <div className="project-title">
              Название проекта <br />
              <span>Аббревиатура</span>
            </div>
            <IconArrowDown width={24} height={24} />
          </div>

          {components.map((component, index) => (
            <div
              className={`project-component ${
                activeComponent === index && "active"
              }`}
              onClick={() => handleClick(index)}
              key={index}
            >
              <IconComponent width={22} height={22} />
              <p className="project-component__text">{component.title}</p>
            </div>
          ))}
        </div>

        <div className="project-estimate">
          <div className="estimate-title">
            <p className="estimate-title__text">Строительно-монтажные работы</p>
            <div className="estimate-title__dop"></div>
          </div>
          <table className="estimate-table">
            <thead>
              <tr>
                <th>Уровень</th>
                <th>Наименование работ</th>
                <th>Основная з/п</th>
                <th>Оборудование</th>
                <th>Накладные расходы</th>
                <th>Сметная прибыль</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className={`level-${row.level}`}>
                  <td style={{ paddingLeft: `${row.level * 20 + 12}px` }}>
                    <div className="row-icon">
                      <IconFile width={24} height={24} />
                    </div>
                  </td>
                  <td>{row.rowName}</td>
                  <td>{row.salary}</td>
                  <td>{row.equipmentCosts}</td>
                  <td>{row.overheads}</td>
                  <td>{row.estimatedProfit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
