"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/db";

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip);

type Props = {};

export const data = {
  labels: ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6', 'Unit 7', 'Unit 8'],
  datasets: [
    {
      label: '% Completion',
      data: [48, 72, 100, 100, 60, 84, 24, 96],
      backgroundColor: [ 
        'rgba(255, 93, 91, 0.6)',
        'rgba(254, 181, 128, 0.6)',
        'rgba(252, 212, 107, 0.6)',
        'rgba(144, 238, 144, 0.6)',
        'rgba(1, 50, 32, 0.6)',
        'rgba(120, 221, 246, 0.6)',
        'rgba(111, 144, 251, 0.6)',
        'rgba(121, 79, 249, 0.6)',
        'rgba(106, 13, 173, 0.6)',
      ],
      borderWidth: 0.5,
    },
  ],
};


const HotTopicsCard = (props: Props) => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">My progress</CardTitle>
        <CardDescription>
          This pie represents your current progress!
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <PolarArea data={data} />
      </CardContent>
    </Card>
  );
};

export default HotTopicsCard;
