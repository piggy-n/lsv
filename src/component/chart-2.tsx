import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {px} from "../shared/px";
import {baseEchartOptions} from "../shared/base-echart-options";
import {createEchartOptions} from "../shared/create-echart-options";

export const Chart2 = () => {
    // 拿到div
    const divRef = useRef(null)
    // 挂载之后拿到div
    useEffect(() => {
        // 打印div信息
        console.log(divRef.current)
        var myChart = echarts.init(divRef.current);
        // 指定图表的配置项和数据
        var option = {
            ...baseEchartOptions,
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                splitLine: {show: false},
                axisLabel: {show: false}
            },
            yAxis: {
                axisTick: {show: false},
                type: 'category',
                data: ['城关区公安局', '七里河区公安局', '西固区公安局', '安宁区公安局', '红古区公安局',
                    '永登县公安局', '皋兰县公安局', '榆中县公安局', '新区公安局'],
                axisLabel: {
                    formatter(val) {
                        return val.replace('公安局', '\n公安局');
                    }
                }
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#2034f9'
                            }, {
                                offset: 1,
                                color: '#04a1ff'
                            }]),
                        }
                    }
                },
                {
                    name: '2012年',
                    type: 'bar',
                    data: [2, 3, 4, 5, 6, 7, 8, 9, 10],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#b92ae8'
                            }, {
                                offset: 1,
                                color: '#6773e7'
                            }]),
                        }
                    }
                }
            ]
        };
        myChart.setOption(createEchartOptions(option));
    }, [])

    return (
        <div className="bordered 破获排名">
            <h2>案件破获排名</h2>
            <div ref={divRef} className="chart"/>
            <div className="legend">
                <span className="first"/> 破案排名1
                <span className="second"/> 破案排名1
            </div>
        </div>
    )
}