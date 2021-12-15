import React, { useEffect, useRef, useState } from 'react';
import styles from './style.less';

const c = [
  { name: '排名', width: '20%' },
  { name: '平台名称', width: '50%' },
  { name: '综合指数', width: '30%' }
]
const d = [
  { order: 1, platName: 'mock数据1111111111111111', cpIndex: '0.4857' },
  { order: 2, platName: 'mock数据2222222222222222', cpIndex: '0.3956' },
  { order: 3, platName: 'mock数据3333333333333333', cpIndex: '0.36' },
  { order: 4, platName: 'mock数据4444444444444444', cpIndex: '0.4857' },
  { order: 5, platName: 'mock数据5555555555555555', cpIndex: '0.3163' },
  { order: 6, platName: 'mock数据6666666666666666', cpIndex: '0.517' },
  { order: 7, platName: 'mock数据7777777777777777', cpIndex: '0.61' },
  { order: 8, platName: 'mock数据8888888888888888', cpIndex: '0.443' },
  { order: 9, platName: 'mock数据9999999999999999', cpIndex: '0.216' }
]
const TggTableScroll = (props) => {
  const { columns = c, data = d, width = '100%', height = 250 } = props;
  const [isScrolle, setIsScrolle] = useState(true);
  // 滚动速度，值越小，滚动越快
  const speed = 30;
  const warper = useRef();
  const childDom1 = useRef();
  const childDom2 = useRef();

  // 开始滚动
  useEffect(() => {
    // 多拷贝一层，让它无缝滚动
    childDom2.current.innerHTML = childDom1.current.innerHTML;
    let timer;
    if (isScrolle) {
      timer = setInterval(
        () =>
          warper.current.scrollTop >= childDom1.current.scrollHeight
            ? (warper.current.scrollTop = 0)
            : warper.current.scrollTop++,
        speed
      );
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isScrolle, data]);

  const hoverHandler = (flag) => setIsScrolle(flag);

  return (
    <div className={styles.container} style={{ width, height }}>
      <div className={styles.headerBox} style={{ width: '100%', height: 55, backgroundColor: '#f2f5fb' }}>
        {
          columns.map((item, index) => (
            <div
              key={index}
              className={styles.headerItem}
              style={{
                borderRight: index !== columns.length - 1 ? '1px solid rgba(0,0,0,.06)' : '',
                width: item?.width || `${100 / columns.length}%`
              }}
            >
              {item.name}
            </div>
          ))
        }
      </div>
      <div className={styles.parent} ref={warper}>
        <div className={styles.child} ref={childDom1}>
          {data && data.map((item, index) => (
            <div
              key={index}
              className={styles.line}
              onMouseOver={() => hoverHandler(false)}
              onMouseLeave={() => hoverHandler(true)}
            >
              {
                Object.keys(item).map((ele, key) => (
                  <div
                    key={key}
                    className={styles.lineItem}
                    style={{ width: columns[key].width || `${100 / columns.length}%` }}
                  >{item[ele]}</div>
                ))
              }
            </div>
          ))}
        </div>
        <div className={styles.child} ref={childDom2}></div>
      </div>
    </div>
  );
}

export default TggTableScroll;